import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from "@material-ui/core";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  isLogin: boolean;
}

const AuthForm = ({ isLogin }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    // Send form data to server and handle response
    setIsLoading(false);
  };

  return (
    <Container maxWidth="sm">
      <Box marginTop={4}>
        <Typography variant="h4" align="center">
          {isLogin ? "Login" : "Sign Up"}
        </Typography>
      </Box>
      <Box marginTop={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box marginBottom={2}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              inputRef={register({
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              fullWidth
            />
          </Box>
          <Box marginBottom={2}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              inputRef={register({
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must have at least 6 characters",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              fullWidth
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

const Login = () => <AuthForm isLogin />;

const SignUp = () => <AuthForm isLogin={false} />;
