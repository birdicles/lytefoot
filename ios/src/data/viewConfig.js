// DON'T THINK ALL THIS NEEDS TO REALLY BE DEFINED HERE BUT WHAT THE HELL.
export default {
    'login': {
        title: 'Login',
        items: [
            {
                id: 'icon',
                path: 'path/to/asset'
            },
            {
                id: 'form',
                items: [
                    {
                        id: 'username',
                        label: 'USERNAME',
                        input: 'text',
                        default: 'Enter Your Username'
                    },
                    {
                        id: 'password',
                        label: 'PASSWORD',
                        input: 'password',
                        default: 'Forgot Password'
                    },
                    {
                        id: 'submit',
                        label: 'Sign In',
                        input: 'button'
                    }
                ]
            },
            {
                // THIS IS DUMB BUT FOR INSTRUCTIONAL PURPOSE
                id: 'footerlink',
                title: "DON'T HAVE AN ACCOUNT? SIGN UP"
            }
        ]
    },
    'signup': {
        title: 'Sign up',
        items: []
    }
};