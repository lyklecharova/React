import Search from "./Search";
import UserListTable from "./UserListTable";

const UserList = () =>{
    return(
        <section className="card users-container">
            <Search/>
            <UserListTable/>
        </section>
    );
}
export default UserList;