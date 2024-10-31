import React, { useEffect, useMemo } from "react";
import DefaultButton from "@/components/butttons/Default";
import { MainContainer } from "@/components/containers/MainContainer";
import Logo from "@/components/logo/Logo";
import { ThemedView } from "@/components/ThemedView";
import { Formik } from "formik";

import { useColorScheme } from "react-native";
import OTPInput from "@/components/inputs/OTPInput";
import OTPHeader from "@/components/headers/OTPHeader";
import { CodeValidation } from "@/util/validators/auth";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";

const VerifyEmail = () => {
  const initialValues = useMemo(
    () => ({
      otp: "",
    }),
    []
  );

  const theme = useColorScheme();
  return (
    <MainContainer>
      <Logo />
      <OTPHeader text="Alsmost there" email={"heithem.kacem@gmail.com"} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          console.log("verified");
          router.push("/(auth)/you-are-vinty");
        }}
        //validationSchema={CodeValidation}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <ThemedView style={{ paddingHorizontal: 10 }}>
            <OTPInput
              onOtpChange={handleChange("otp")}
              otpValue={values.otp}
              editable={true}
              error={touched.otp && errors.otp}
            />

            <DefaultButton
              size="large"
              isSubmitting={false}
              onPress={handleSubmit}
              title="Verify"
            />
          </ThemedView>
        )}
      </Formik>
      <ThemedText
        type="regular-12"
        style={{ textAlign: "center", marginTop: 20 }}
      >
        Didn't receive the code?{" "}
        <ThemedText style={{ textDecorationLine: "underline" }} type="bold-12">
          Resend Again
        </ThemedText>
      </ThemedText>
      <ThemedText
        type="regular-12"
        style={{
          textAlign: "center",
          color: Colors[theme ?? "light"].darkGray,
          marginTop: 10,
        }}
      >
        Request new code in 00:30s
      </ThemedText>
    </MainContainer>
  );
};

export default VerifyEmail;
