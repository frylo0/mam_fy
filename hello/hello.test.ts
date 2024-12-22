namespace $.$$ {
	$mol_test({
		'Generating greeting message'() {
			const app = new $fy_hello()
			$mol_assert_equal(app.message(), '')

			app.name('Jin')
			$mol_assert_equal(app.message(), 'Hello, Jin!')
		},
	})
}
