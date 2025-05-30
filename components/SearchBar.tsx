import {
  Image,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

interface Props {  
  placeholder: string;
  value?: string
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress , value, onChangeText}: Props) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View className="flex-row items-center bg-dark rounded-full px-5 py-4">
        <Image
          source={icons.search}
          className=" size-5"
          resizeMode="contain"
          tintColor="#ab8bff"
        />
        <TextInput
          onPress={onPress}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#ab8bff"
          className="flex-1 ml-3 text-white"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
