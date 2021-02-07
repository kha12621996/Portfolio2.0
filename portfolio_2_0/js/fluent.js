document.addEventListener('DOMContentLoaded', 
					function () { document.querySelector('#interaktiv').addEventListener('click', animiere);
			
					function animiere() {
							// Ladebalken für Microsoft-Office
							var ladebalken = document.getElementById('ladebalken');
								ladebalken.animate( [{ width: '1em', background: 'green'}, { width: '10em', background: 'lime' } ], 
								{ duration: 50, iterations: 1, fill: 'forwards'});
							// Ladebalken für Photoshop für Konzeption
							var ladebalken2 = document.getElementById('ladebalken2');
								ladebalken2.animate([{ width: '1em', background: 'green'}, { width: '10em', background: 'lime'}], 
								{ duration: 100, iterations: 1, fill: 'forwards'});
							// Ladebalken für HTML
							var ladebalken3 = document.getElementById('ladebalken3');
								ladebalken3.animate([{width: '1em', background: 'green'}, { width: '12em', background: 'lime'}], 
								{ duration: 150, iterations: 1, fill: 'forwards'});
							// Ladebalken für Javascript
							var ladebalken4 = document.getElementById('ladebalken4');
								ladebalken4.animate([{width: '1em', background: 'green'}, { width: '10em', background: 'lime'}], 
								{ duration: 200, iterations: 1, fill: 'forwards' });
							// Ladebalken für MYSQL
							var ladebalken5 = document.getElementById('ladebalken5');
								ladebalken5.animate([{width: '1em', background: 'green'}, { width: '8em', background: 'lime'}],
								{ duration: 250, iterations: 1, fill: 'forwards' });
							// Ladebalken für PHP
							var ladebalken6 = document.getElementById('ladebalken6');
								ladebalken6.animate([{ width: '1em', background: 'green'}, { width: '10em', background: 'lime'}], 
								{ duration: 300, iterations: 1, fill: 'forwards'});
							// Ladebalken für C#
							var ladebalken7 = document.getElementById('ladebalken7');
								ladebalken7.animate([{ width: '1em', background: 'green'}, {width: '9em', background: 'lime'}], 
								{ duration: 350, iterations: 1, fill: 'forwards' });
							// Ladebalken für Wordpress
							var ladebalken8 = document.getElementById('ladebalken8');
								ladebalken8.animate([{ width: '1em', background: 'green'}, {width: '9em', background: 'lime'}], 
								{ duration: 350, iterations: 1, fill: 'forwards' });
								}
					});