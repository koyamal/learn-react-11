import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: "Login is Successful", status: "success" });
            history.push("/home");
          } else {
            alert("Not Found User");
          }
        })
        .catch(() => {
          alert("Login Failed");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [history]
  );

  return { login, loading };
};
