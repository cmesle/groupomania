import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function PostLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )

}

export default PostLayout