import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useAppSelector } from '../store/hooks';
const Homepage = () => {
    const { user } = useAppSelector(state => state.user);
    // const { cats } = user || null
    const userCats = user.cats;
    console.log(user);
    return (_jsxs(_Fragment, { children: [_jsx("h1", { children: " This is the homepage " }), user ?
                _jsxs(_Fragment, { children: [_jsxs("p", { children: [" Welcome ", user.email, " "] }), user ? user.cats.map((cat) => _jsxs("li", { children: [" ", cat.name, " "] })) : null] })
                :
                    _jsx("p", { children: "There is no user currenly logged in" })] }));
};
export default Homepage;
