import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import 'd3-selection-multi';
import 'd3-shape';

export default function Graph({data}) {
    const graphRenderedRef = useRef(false);

    useEffect(() => {
        if (graphRenderedRef.current) {
            return;
        }

      
        const margin = { top: 20, right: 20, bottom: 50, left: 50 };
        const width = 719 - margin.left - margin.right;
        const height = 408 - margin.top - margin.bottom;

        const svg = d3
            .select('#graph-container')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const xScale = d3
            .scaleBand()
            .domain(data.map((d) => d.time))
            .range([0, width])
            .padding(0.1);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.sales)])
            .nice()
            .range([height, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);
        const area = d3
            .area()
            .x((d) => xScale(d.time) + xScale.bandwidth() / 2)
            .y0(height)
            .y1((d) => yScale(d.sales))
            .curve(d3.curveCardinal);

        const xAxisGroup = svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(xAxis);

        xAxisGroup.select('path').style('stroke', 'transparent');

        xAxisGroup
            .selectAll('text')
            .style('text-anchor', 'middle')
            .style('font-size', '0.6rem')
            .style('fill', '#030229ab');

        const yAxisGroup = svg
            .append('g')
            .attr('class', 'y-axis')
            .call(yAxis);

        yAxisGroup.select('path').style('stroke', 'transparent');

        yAxisGroup
            .selectAll('text')
            .style('font-size', '0.6rem')
            .style('fill', '#030229ab');

        svg.selectAll('.y-axis .tick line').style('stroke', 'transparent');

        svg.selectAll('.x-axis .tick line').style('stroke', 'transparent');

        const line = d3
            .line()
            .x((d) => xScale(d.time) + xScale.bandwidth() / 2)
            .y((d) => yScale(d.sales))
            .curve(d3.curveCardinal);

        svg
            .append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('fill', 'none')
            .attr('stroke', 'url(#gradient)')
            .attr('stroke-width', '0.2rem')
            .attr('d', line);

        svg
            .append('path')
            .datum(data)
            .attr('class', 'area')
            .attr('fill', 'url(#areaGradient)')
            .attr('d', area);
        const hoverLine = svg
            .append('line')
            .attr('class', 'hover-line')
            .attr('x1', 0)
            .attr('x2', 0)
            .attr('y1', 0)
            .attr('y2', height)
            .style('stroke', '#605BFF')
            .style('stroke-width', '1px')
            .style('stroke-dasharray', '4 4') 
            .style('opacity', 0); 

       
        svg.on('mousemove', onMouseMove)
            .on('mouseout', onMouseOut);

        function onMouseMove(event) {
           
            const mouseX = d3.pointer(event)[0];

          
            hoverLine.attr('x1', mouseX).attr('x2', mouseX);

          
            hoverLine.style('opacity', 1);
        }

        function onMouseOut() {
           
            hoverLine.style('opacity', 0);
        }
        svg
            .selectAll('.dot')
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('cx', (d) => xScale(d.time) + xScale.bandwidth() / 2)
            .attr('cy', (d) => yScale(d.sales))
            .attr('r', 5)
            .style('fill', 'white')
            .style('stroke', '#AE8FF7')
            .style('stroke-width', '0.2rem')
           
        graphRenderedRef.current = true;
    }, []);

    return (
        <div className='bg-[white] block w-[36rem] mt-[1.5rem]  block'>
            <div id="tooltip" className="tooltip"></div>
            <div id="graph-container" className="graph-container">
                <svg>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#5BC4FF" stopOpacity="1" />
                            <stop offset="100%" stopColor="#FF5BEF" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(94, 195, 255, 0.04)" />
                            <stop offset="100%" stopColor="rgba(253, 93, 239, 0.04)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
