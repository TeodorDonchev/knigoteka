const getLinks = (logged, user) => {
    
    const userLinks = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Books',
            href: '/all-books'
        },
        {
            title: 'Post Book',
            href: '/post-book'
        },
        {
            title: 'Profile',
            href: `/profile/${user && user._id}`
        },
        {
            title: 'Logout',
            href: `/`
        },
        
    ];
    
    const guestLinks = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Books',
            href: '/all-books'
        },
        {
            title: 'Login',
            href: '/login'
        },
        {
            title: 'Register',
            href: '/register'
        },
    ];

    if (logged){
        return userLinks;
    }

    return guestLinks;
}

export default getLinks;