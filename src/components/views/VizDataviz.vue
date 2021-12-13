<template>
  <div class="section-dataviz chart-wrapper">
    <div>
      <svg id="dataviz" />
    </div>
    <div class="tooltip">
      <p class="text-reference font-weight-light mb-0" id="custom-tooltip-value" />
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';
import _times from 'lodash.times';

export default {
  name: 'VizDataviz',
  data() {
    return {};
  },
  async mounted() {
    const rawData = await d3.json('data/stories.json');

    d3.select('#dataviz').attr('width', '1200px').attr('height', '1100px').call(this.responsivefy);
    // .style('border', '2px solid red');

    const squareNumber = {
      high: 3,
      medium: 2,
      low: 1,
    };

    const stories = rawData.map((d) => ({
      story: d.story,
      nickname: d.nickname,
      complexity: squareNumber[d.number],
      scale: d.scale,
      link: d.link,
      tools: [d.mapbox, d.scrolly, d.d3, d.flourish],
    }));

    this.drawFlowers(stories);
  },
  methods: {
    drawFlowers(datapoints) {
      const chart = d3.select('#dataviz');

      var flower = chart
        .selectAll('g.flowers')
        .data(datapoints)
        .enter()
        .append('g')
        .classed('flowers', true)
        .attr('transform', (d, i) => `translate(${(i % 6) * 200 + 100}, ${Math.floor(i / 6) * 200 + 80})`);
      // .attr('transform', (d, i) => `translate(${i % 6 * 200 + 100}, ${Math.floor(i / 6) * 200 + 80})`);

      flower.on('click', (e, d) => {
        window.open(d.link);
      });

      flower
        .on('mouseover', (event, d) => {
          const customTooltip = document.getElementById('custom-tooltip-value');
          customTooltip.innerText = d.story;

          let x = event.offsetX;
          let y = event.offsetY;

          d3.select('.tooltip')
            .style('opacity', 1)
            .transition('outlol')
            .duration(0)
            .style('opacity', 1)
            .style('top', `${y + 10}px`)
            .style('left', `${x}px`);
        })
        .on('mouseout', () => {
          d3.select('.tooltip').transition('outlol').duration(1500).style('opacity', 0);
        });

      flower
        .append('text')
        .text((d) => d.nickname)
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(0, 120)');

      flower
        .selectAll('rect')
        .data((d) => {
          return _times(d.complexity, (i) => {
            const color = {
              0: '#ffa600',
              1: '#fb6239',
              2: '#d81e5b',
            };

            return {
              scale: 1 - i * 0.18,
              rotate: i % 2 ? 45 + i * 15 : 45 + i * -5,
              color: color[i],
              stroke: d.scale,
            };
          });
        })
        .enter()
        .append('rect')
        .attr('width', 60)
        .attr('height', 60)
        .attr('fill', (d) => d.color)
        .attr('fill-opacity', 0.65)
        .attr('stroke', (d) => (d.stroke === 'internal' ? '#C6D8D3' : 'none'))
        .attr('stroke-width', 5)
        .attr('stroke-opacity', (d) => (d.color === '#ffa600' ? 1 : 0))
        .attr('transform', (d) => `translate(0) rotate(${d.rotate}) scale(${d.scale})`);

      flower
        .selectAll('circle.tools')
        .data((d) => {
          return _times(d.tools.length, (i) => {
            const color = {
              0: 'none',
              1: '#EB5E55', // or purple
            };
            // const translateX = [25, 45, -25, -45]
            // const translateY = [80, 60, 80, 60]
            const translateX = [0, 49, -49, 0];
            const translateY = [-8, 42, 42, 90];
            // [BR, TR,]
            return {
              x: translateX[i],
              y: translateY[i],
              opacity: d.tools[i],
              color: color[d.tools[i]],
            };
          });
        })
        .enter()
        .append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 5.5)
        .attr('opacity', (d) => d.opacity)
        .attr('fill', (d) => d.color)
        // .attr('fill-opacity', 0.7)
        .attr('stroke', '#FDF0D5')
        .attr('stroke-width', 1)
        .attr('transform', (d) => `translate(${d.x}, ${d.y})`);

      flower
        .selectAll('text.name')
        .append('text')
        .classed('name', true)
        .text((d) => d.story);
    },
    responsivefy(svg) {
      const container = d3.select(svg.node().parentNode);
      const width = parseInt(svg.style('width'), 10);
      const height = parseInt(svg.style('height'), 10);
      const aspect = width / height;

      svg.attr('viewBox', `0 0 ${width} ${height}`).attr('preserveAspectRatio', 'xMinYMid').call(this.resize, aspect);

      d3.select(window).on(`resize.${container.attr('id')}`, () => {
        this.resize(svg, aspect);
      });
    },
    resize(svg, aspect) {
      const container = d3.select(svg.node().parentNode);
      const w = parseInt(container.style('width'));

      svg.attr('width', w);
      svg.attr('height', Math.round(w / aspect));
    },
  },
};
</script>

<style lang="scss">
text {
  font-family: 'IBM Plex Sans', sans-serif;
}

.flowers {
  cursor: pointer;
}

div.chart-wrapper {
  position: relative;
}

div.tooltip {
  position: absolute;
  /* right: -250px; */
  top: 0px;
  width: auto;
  max-width: 200px;
  height: auto;
  background: white;
  padding: 8px;
  color: #3a3335;
  opacity: 0;
  pointer-events: none;
}
</style>
