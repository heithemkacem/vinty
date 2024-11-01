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
import { ResetPasswordSchema } from "@/util/validators/auth";
import Indicator from "@/components/common/Indicator";
import ScreenMarker from "@/components/common/ScreenMarker";

const ResetPassword = () => {
  const initialValues = useMemo(
    () => ({
      password: "",
      confirmPassword: "",
    }),
    []
  );

  const theme = useColorScheme();
  const router = useRouter();
  return (
    <MainContainer>
      <Logo />
      <Indicator page={2} />
      <ScreenMarker
        image={require("@/assets/images/ResetPassword/reset.png")}
      />
      <AuthHeader
        text="Reset password"
        subtitle="Enter your new password, then confirm it to secure your account."
      />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          router.push("/(auth)/password-changed-success");
          console.log(values);
        }}
        //validationSchema={ResetPasswordSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <ThemedView style={{ paddingHorizontal: 10 }}>
            <TextInput
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="New Password"
              error={touched.password && errors.password}
              isPassword={true}
            />
            <TextInput
              onChangeText={handleChange("confirmPassword")}
              value={values.confirmPassword}
              placeholder="Confirm New Password"
              error={touched.confirmPassword && errors.confirmPassword}
              isPassword={true}
            />
            <DefaultButton
              style={{ marginTop: 50 }}
              size="large"
              isSubmitting={false}
              onPress={handleSubmit}
              title="Reset Password"
            />
          </ThemedView>
        )}
      </Formik>
    </MainContainer>
  );
};

export default ResetPassword;
