import { useEffect } from "react"
import { window, document } from 'browser-monads'

export default function () {
  useEffect(() => {
    const canvas = document.getElementById('background-canvas')

    if (canvas) {
      const context = canvas.getContext('2d');

      let width = canvas.width = window.innerWidth;
      let height = canvas.height = window.innerHeight;


      let waves = [];
      const count = 5;
      let waveHeights = [height/1.2, height/1.7, height/2.6, height/3, height/4]
      const colors = ["#EE7768", "#FF998C", "#FFBDA6", "#FFC2AD", "#FFCFBE"];

      window.addEventListener('resize', resizeCanvas, false);

      init();

// ************************

      function init() {
        // Create the waves
        for (let i = 0; i < count; i++) {
          createWave(colors[i], 3, waveHeights[i]);
        }
        update()
        setInterval(update, 10);
      }

      function update() {
        context.fillStyle = '#6B2CC0';
        context.globalCompositeOperation = 'source-over';
        context.fillRect(0, 0, width, height);

        context.globalCompositeOperation = 'source-over';
        // Draw waves
        for (let i = 0; i < waves.length; i++) {
          for (let j = 0; j < waves[i].nodes.length; j++) {
            const wave = waves[i]
            bounce(wave.nodes[j], wave.waveHeight);
          }
          drawWave(waves[i]);
        }
      }

      function recreateWaves() {
        waves = []
        for (let i = 0; i < count; i++) {
          createWave(colors[i], 3, waveHeights[i]);
        }
      }

      function createWave(color, nodes, waveHeight) {
        var nodeArray = [];
        for (let i = 0; i <= nodes + 2; i++) {
          // Each node is a set of four points
          var node = [((i - 1) * width) / nodes, 0, Math.random() * 200, 0.3];
          nodeArray.push(node);
        }
        waves.push({
          color: color,
          waveHeight: waveHeight,
          nodes: nodeArray,
        });
      }

      function bounce(node, waveHeight) {
        // We change the value of the quadratic pull for each point to move the line
        node[1] = (waveHeight / 10) * Math.sin(node[2] / 20) + height - waveHeight;
        node[2] = node[2] + node[3];
      }


      function drawWave(wave) {
        var diff = function(a, b) {
          return (b - a) / 2 + a;
        };
        context.fillStyle = wave.color;
        context.beginPath();
        context.moveTo(0, height);
        context.lineTo(wave.nodes[0][0], wave.nodes[0][1]);
        for (let i = 0; i < wave.nodes.length; i++) {
          if (wave.nodes[i + 1]) {
            context.quadraticCurveTo(
              wave.nodes[i][0],
              wave.nodes[i][1],
              diff(wave.nodes[i][0], wave.nodes[i + 1][0]),
              diff(wave.nodes[i][1], wave.nodes[i + 1][1]),
            );
          } else {
            context.lineTo(wave.nodes[i][0], wave.nodes[i][1]);
            context.lineTo(width, height);
          }
        }

        context.closePath();
        context.fill();
      }

      function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;

        waveHeights = [height/1.2, height/1.7, height/2.6, height/3, height/4]

        recreateWaves()
        update();
      }
    }

  }, [])
}