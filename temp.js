plugins: [
						new HtmlWebpackPlugin({
							// Required
							inject: false,
							template: require('html-webpack-template'),
							// template: 'node_modules/html-webpack-template/index.ejs',

							// Optional
							appMountId: 'app',
							headHtmlSnippet:
								'<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous" >',
							bodyHtmlSnippet: '<div id="container"></div>',
							meta: [
								{
									name: 'description',
									content:
										'A better default template for html-webpack-plugin.'
								}
							],
							lang: 'en-US',
							title: 'My App',
						})
					];