import { useState } from "react";
import Axios from "axios";
import { css } from "@emotion/react";
import { Box, Button, ButtonGroup, CardHeader, TextField } from "@mui/material";
import { fetchAsyncLogin } from "../../stores/slices/loginSlice";
import { useDispatch } from "react-redux";
export const Login = () => {
  const [userEmeil, setUserEmail] = useState(``);
  const [userPassword, setUserPassword] = useState(``);
  const dispatch = useDispatch();
  const login = async () => {
    const data = {
      email: userEmeil,
      password: userPassword,
    };
    dispatch(fetchAsyncLogin(data));
  };
  return (
    <>
      <Box display={`flex`} justifyContent={`center`}>
        <Box width={500} display={`flex`} flexDirection={`column`}>
          <TextField
            fullWidth
            id={`outlined-basic`}
            label={`email`}
            variant={`outlined`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserEmail(e.target.value);
            }}
          />
          <br />
          <TextField
            fullWidth
            id={`outlined-basic`}
            label={`password`}
            type={`password`}
            variant={`outlined`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserPassword(e.target.value);
            }}
          />
          <br />
        </Box>
      </Box>
      <Box display={`flex`} justifyContent={`center`} mt={2}>
        <Box width={400}>
          <ButtonGroup
            fullWidth
            variant={`contained`}
            aria-label={`outlined primary button group`}
          >
            <Button size={`large`} color={`primary`} fullWidth onClick={login}>
              Login
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
};

export default Login;
