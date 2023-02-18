import { useState } from "react";
import { useFetchUsers } from "./hooks/useFetchUsers";
import axios from "axios";

export const App = () => {
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {isError && <p>エラーが発生しました</p>}
      {console.log(userList)}
      {isLoading ? <p>データ取得中です</p> : userList.map
        (user =>
          console.log('user: ' + user.name)
          (
            <div>
              <h1>user.name</h1>
              <p key={user.name} 
              />
            </div>
          )
        )
      }
    </div>
  );
}

export default App;
