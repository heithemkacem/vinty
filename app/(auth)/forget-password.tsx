import React, { useMemo } from "react";
import DefaultButton from "@/components/buttons/Default";
import { MainContainer } from "@/components/containers/MainContainer";
import AuthHeader from "@/components/headers/AuthHeader";
import TextInput from "@/components/inputs/TextInput";
import Logo from "@/components/logo/Logo";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { Formik } from "formik";

import { useColorScheme } from "react-native";
import Indicator from "@/components/common/Indicator";
import ScreenMarker from "@/components/common/ScreenMarker";

const ForgetPassword = () => {
  const initialValues = useMemo(
    () => ({
      email: "",
    }),
    []
  );

  const theme = useColorScheme();
  const router = useRouter();
  return (
    <MainContainer>
      <Logo />
      <Indicator page={0} />
      <ScreenMarker
        image={require("@/assets/images/ResetPassword/forget.png")}
      />
      <AuthHeader
        text="Forget Password"
        subtitle="Easily reset your password to regain access to your account and continue enjoying Vinty’s services."
      />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          router.push("/(auth)/reset-password-otp");
          console.log(values);
        }}
        // validationSchema={ForgetPasswordSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <ThemedView style={{ paddingHorizontal: 10 }}>
            <TextInput
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="E-mail"
              error={touched.email && errors.email}
            />

            <DefaultButton
              style={{ marginTop: 50 }}
              size="large"
              isSubmitting={false}
              onPress={handleSubmit}
              title="Continue"
            />
          </ThemedView>
        )}
      </Formik>
    </MainContainer>
  );
};

export default ForgetPassword;
