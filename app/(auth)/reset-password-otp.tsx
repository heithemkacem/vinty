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
import { useRouter } from "expo-router";
import { Formik } from "formik";

import { useColorScheme } from "react-native";
import { ForgetPasswordSchema, LoginSchema } from "@/util/validators/auth";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import Indicator from "@/components/common/Indicator";
import ScreenMarker from "@/components/common/ScreenMarker";
import OTPHeader from "@/components/headers/OTPHeader";
import OTPInput from "@/components/inputs/OTPInput";

const ResetPasswordOtp = () => {
  const initialValues = useMemo(
    () => ({
      otp: "",
    }),
    []
  );
  const theme = useColorScheme();
  const router = useRouter();
  return (
    <MainContainer>
      <Logo />
      <Indicator page={1} />
      <ScreenMarker image={require("@/assets/images/ResetPassword/otp.png")} />
      <OTPHeader email="heithem.kacem@gmail.com" text="Enter OTP" />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          router.push("/(auth)/reset-password");
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
            <ThemedText
              type="regular-12"
              style={{ textAlign: "center", marginTop: 20 }}
            >
              Didn't receive the code?{" "}
              <ThemedText
                style={{ textDecorationLine: "underline" }}
                type="bold-12"
              >
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

export default ResetPasswordOtp;
