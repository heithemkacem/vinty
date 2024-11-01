import React, { useMemo } from "react";
import DefaultButton from "@/components/buttons/Default";
import CheckBoxWithLink from "@/components/common/CheckBoxWithLink";
import SocialMediaLinks from "@/components/common/SocialMediaLinks";
import TextWithLink from "@/components/common/TextWithLink";
import { MainContainer } from "@/components/containers/MainContainer";
import AuthHeader from "@/components/headers/AuthHeader";
import TextInput from "@/components/inputs/TextInput";
import Logo from "@/components/logo/Logo";
import { ThemedView } from "@/components/ThemedView";
import { useSession } from "@/context/ctx";
import { useRouter } from "expo-router";
import { Formik } from "formik";

import { useColorScheme } from "react-native";
import { LoginSchema } from "@/util/validators/auth";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

const Login = () => {
  const { signIn } = useSession();
  const initialValues = useMemo(
    () => ({
      email: "",
      password: "",
    }),
    []
  );

  const theme = useColorScheme();
  const router = useRouter();
  return (
    <MainContainer>
      <Logo />
      <AuthHeader
        text="Login"
        subtitle="Enter your email and password to log in "
      />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          signIn();
          setSubmitting(false);
          router.push("/(dashboard)/");
        }}
        //validationSchema={LoginSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <ThemedView style={{ paddingHorizontal: 10 }}>
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
            <CheckBoxWithLink
              text="Remember Me"
              link="Forgot Password?"
              href={"/(auth)/forget-password"}
            />
            <DefaultButton
              size="large"
              isSubmitting={false}
              onPress={handleSubmit}
              title="Login"
            />

            <TextWithLink
              text="Don't have an account ?"
              link="Sign Up"
              href={"/(auth)/signup"}
            />
            <ThemedView
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <ThemedText
                type="regular-12"
                style={{ color: Colors[theme ?? "light"].graySubtitle }}
              >
                - OR Continue with -
              </ThemedText>
            </ThemedView>
            <SocialMediaLinks />
            <ThemedView
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 40,
              }}
            >
              <ThemedText
                type="bold-12"
                style={{ color: Colors[theme ?? "light"].primary }}
              >
                Continue as a guest
              </ThemedText>
            </ThemedView>
          </ThemedView>
        )}
      </Formik>
    </MainContainer>
  );
};

export default Login;
