import { useEffect, useRef, useState } from "react";
import Axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
  CardHeader,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncSignup,
  signupRes,
  signupLoading,
  setVal,
} from "../../stores/slices/signupSlice";
import Router from "next/router";
import { FIXME } from "../../types/Any";
export const SignUp = () => {
  const [userEmeil, setUserEmail] = useState(``);
  const [userPassword, setUserPassword] = useState(``);
  const [userName, setUserName] = useState(``);
  const dispatch = useDispatch();
  const _signupRes = useSelector(signupRes);
  const _signupLoading = useSelector(signupLoading);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const toggle = () => setOpen(!open);
  const { error_messge, success_messge, status }: FIXME = _signupRes;
  const submit = async () => {
    const data = {
      email: userEmeil,
      password: userPassword,
      user_name: userName,
    };
    dispatch(fetchAsyncSignup(data));
  };
  useEffect(() => {
    error_messge && toggle();
  }, [setOpen]);
  return (
    <>
      {_signupLoading && <CircularProgress />}
      {status && (
        <Modal
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          sx={{
            display: "flex",
            p: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          container={() => rootRef.current}
        >
          <Box
            sx={{
              position: "relative",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: (theme) => theme.shadows[5],
              p: 4,
            }}
          >
            <Typography id="server-modal-description" sx={{ pt: 2 }}>
              {success_messge ? success_messge : error_messge}
            </Typography>
            <ButtonGroup
              sx={{ mt: 2 }}
              fullWidth
              variant={`contained`}
              aria-label={`outlined primary button group`}
            >
              {error_messge && (
                <Button
                  color={`error`}
                  onClick={() => {
                    dispatch(setVal({ key: `res`, value: `` }));
                  }}
                >
                  Close
                </Button>
              )}
              {success_messge && (
                <Button
                  color={`success`}
                  onClick={() => {
                    dispatch(setVal({ key: `res`, value: `` }));
                    status === 200 && Router.push(`/login`);
                  }}
                >
                  Login
                </Button>
              )}
            </ButtonGroup>
          </Box>
        </Modal>
      )}
      <Typography variant="h2" gutterBottom component="div">
        SignUp
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: 500, display: "flex", flexDirection: "column" }}>
          <TextField
            fullWidth
            id={`outlined-basic`}
            label={`name`}
            variant={`outlined`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(e.target.value);
            }}
          />
          <br />
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
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
        <Box sx={{ width: 400 }}>
          <ButtonGroup
            fullWidth
            variant={`contained`}
            aria-label={`outlined primary button group`}
          >
            <Button size={`large`} color={`primary`} fullWidth onClick={submit}>
              Signup
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const container = css`
  max-width: 500px;
  margin: 0 auto;
`;

export default SignUp;
