import React, { useMemo } from "react";
import DefaultButton from "@/components/butttons/Default";
import TextWithLink from "@/components/common/TextWithLink";
import { MainContainer } from "@/components/containers/MainContainer";
import AuthHeader from "@/components/headers/AuthHeader";
import TextInput from "@/components/inputs/TextInput";
import Logo from "@/components/logo/Logo";
import { ThemedView } from "@/components/ThemedView";
import { useSession } from "@/context/ctx";
import { useRouter } from "expo-router";
import { Formik } from "formik";

import { StyleSheet, useColorScheme } from "react-native";
import { SignupSchema } from "@/util/validators/auth";
import CheckBoxWithLink from "@/components/common/CheckBoxWithLinkRow";

const Signup = () => {
  const { signIn } = useSession();
  const initialValues = useMemo(
    () => ({
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );
  const handleLogin = () => {
    // Handle login logic
  };
  const theme = useColorScheme();
  const router = useRouter();
  return (
    <MainContainer>
      <Logo />
      <AuthHeader
        text="Sign up"
        subtitle="Get started by creating an account"
      />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          signIn();
          setSubmitting(false);
          router.replace("/(auth)/verify-email");
        }}
        validationSchema={SignupSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <ThemedView style={{ paddingHorizontal: 10 }}>
            <TextInput
              onChangeText={handleChange("fullname")}
              value={values.fullname}
              placeholder="Fullname"
              error={touched.fullname && errors.fullname}
            />
            <TextInput
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="E-mail"
              error={touched.email && errors.email}
            />
            <TextInput
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="**********"
              isPassword={true}
              error={touched.password && errors.password}
            />
            <TextInput
              onChangeText={handleChange("confirmPassword")}
              value={values.confirmPassword}
              placeholder="**********"
              isPassword={true}
              error={touched.confirmPassword && errors.confirmPassword}
            />
            <CheckBoxWithLink
              href={"/(auth)/login"}
              text="By checking the box you agree to our"
              link="Terms and Conditions"
            />
            <DefaultButton
              size="large"
              isSubmitting={false}
              onPress={handleSubmit}
              title="Register"
            />

            <TextWithLink
              text="Already have an account?"
              link="Login"
              href={"/(auth)/login"}
            />
          </ThemedView>
        )}
      </Formik>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 14,
  },
  button: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  forgotPassword: {
    marginBottom: 20,
    color: "blue",
  },
  signupText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  signupLink: {
    color: "blue",
    fontWeight: "bold",
  },
  orText: {
    marginVertical: 20,
    textAlign: "center",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialButton: {
    flex: 1,
    backgroundColor: "lightgray",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
});

export default Signup;
