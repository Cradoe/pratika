

export default function ({ store, route, redirect }: any) {

    const publicPages = ['/', '/login', '/register', '/retrieve-password', '/about'];
    const authRequired = !publicPages.includes(route.path);

    if (authRequired && !store.state.user) {
        return redirect('/login')
    }


}