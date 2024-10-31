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
          router.push("/(auth)/verify-email");
        }}
        // validationSchema={SignupSchema}
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

export default Signup;
