import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";

export type SizetinyRingfalseType = {
  wrapper?: ImageSourcePropType;

  /** Style props */
  sizetinyRingfalsePosition?: string;
  sizetinyRingfalseTop?: number | string;
  sizetinyRingfalseLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SizetinyRingfalse = ({
  wrapper,
  sizetinyRingfalsePosition,
  sizetinyRingfalseTop,
  sizetinyRingfalseLeft,
}: SizetinyRingfalseType) => {
  const sizetinyRingfalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sizetinyRingfalsePosition),
      ...getStyleValue("top", sizetinyRingfalseTop),
      ...getStyleValue("left", sizetinyRingfalseLeft),
    };
  }, [sizetinyRingfalsePosition, sizetinyRingfalseTop, sizetinyRingfalseLeft]);

  return (
    <View style={[styles.sizetinyRingfalse, sizetinyRingfalseStyle]}>
      <Image style={styles.wrapperIcon} contentFit="cover" source={wrapper} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperIcon: {
    width: 40,
    height: 40,
  },
  sizetinyRingfalse: {
    flexDirection: "row",
  },
});

export default SizetinyRingfalse;
