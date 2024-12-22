namespace $.$$ {
	$mol_style_define($fy_ui_button, {
		cursor: 'pointer',

		border: {
			width: '1px',
			radius: '5px',
			style: 'solid',
		},

		color: $mol_colors.white,
		backgroundColor: $mol_colors.black,

		'@media': {
			'(500px <= width <= 768px)': {
				color: $mol_colors.blue,
				backgroundColor: $mol_colors.aqua,
			},
		},
	});
}
