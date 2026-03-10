import "./global.css";
import React from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";

export default function LandingScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-blue-600">
      <StatusBar barStyle="light-content" backgroundColor="#1a7fd4" />

      {/* Header / Branding */}
      <View className="flex-1 items-center justify-center px-8">
        <View className="w-20 h-20 bg-white rounded-2xl items-center justify-center mb-6 shadow-lg">
          <Text className="text-blue-600 text-4xl font-black">IA</Text>
        </View>
        <Text className="text-white text-3xl font-black tracking-tight">I-Asset SMBR</Text>
        <Text className="text-blue-200 text-sm mt-2 text-center">
          Digitalisasi Labeling & Tracking{"\n"}Aset Umum PT Semen Baturaja
        </Text>
      </View>

      {/* Action Buttons */}
      <View className="px-8 pb-12 gap-4">
        {/* Scan QR — Guest */}
        <TouchableOpacity
          className="bg-white rounded-2xl p-5 flex-row items-center shadow"
          onPress={() => router.push("/(guest)/scan")}
          activeOpacity={0.85}
        >
          <View className="w-12 h-12 bg-blue-50 rounded-xl items-center justify-center mr-4">
            <Text className="text-2xl">📷</Text>
          </View>
          <View className="flex-1">
            <Text className="text-gray-900 font-bold text-base">Scan QR Code</Text>
            <Text className="text-gray-500 text-xs mt-0.5">
              Scan QR pada aset tanpa perlu login
            </Text>
          </View>
          <Text className="text-gray-400 text-lg">›</Text>
        </TouchableOpacity>

        {/* Login Admin */}
        <TouchableOpacity
          className="bg-blue-500 rounded-2xl p-5 flex-row items-center border border-blue-400"
          onPress={() => router.push("/(auth)/login")}
          activeOpacity={0.85}
        >
          <View className="w-12 h-12 bg-blue-400 rounded-xl items-center justify-center mr-4">
            <Text className="text-2xl">🔐</Text>
          </View>
          <View className="flex-1">
            <Text className="text-white font-bold text-base">Login Admin</Text>
            <Text className="text-blue-200 text-xs mt-0.5">
              Kelola data aset dengan akun Admin
            </Text>
          </View>
          <Text className="text-blue-300 text-lg">›</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View className="items-center pb-6">
        <Text className="text-blue-300 text-xs">
          Unit General Affair — PT Semen Baturaja (Persero) Tbk
        </Text>
      </View>
    </View>
  );
}
