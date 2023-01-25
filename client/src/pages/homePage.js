import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppSelector } from '../store/hooks';
const Homepage = () => {
    const { user } = useAppSelector(state => state.user);
    // const { cats } = useAppSelector(state => state.cats)
    const userCats = 'hi';
    console.log(user);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: " This is the homepage " }), user ?
                _jsxs(_Fragment, { children: [_jsxs("p", { children: [" Welcome ", user.email, " "] }), _jsx("p", { children: userCats })] })
                :
                    _jsx("p", { children: "There is no user currenly logged in" })] }));
};
export default Homepage;
