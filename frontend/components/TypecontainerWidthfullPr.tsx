import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

export type TypecontainerWidthfullPrType = {
  label?: string;

  /** Style props */
  typecontainerWidthfullPrPosition?: string;
  typecontainerWidthfullPrBorderRadius?: number;
  typecontainerWidthfullPrBackgroundColor?: string;
  typecontainerWidthfullPrWidth?: number | string;
  typecontainerWidthfullPrTop?: number | string;
  typecontainerWidthfullPrLeft?: number | string;
  typecontainerWidthfullPrElevation?: number;
  typecontainerWidthfullPrHeight?: number | string;
  labelFontFamily?: string;
  labelTextAlign?: string;
  labelFlex?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypecontainerWidthfullPr = ({
  label,
  typecontainerWidthfullPrPosition,
  typecontainerWidthfullPrBorderRadius,
  typecontainerWidthfullPrBackgroundColor,
  typecontainerWidthfullPrWidth,
  typecontainerWidthfullPrTop,
  typecontainerWidthfullPrLeft,
  typecontainerWidthfullPrElevation,
  typecontainerWidthfullPrHeight,
  labelFontFamily,
  labelTextAlign,
  labelFlex,
}: TypecontainerWidthfullPrType) => {
  const typecontainerWidthfullPrStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typecontainerWidthfullPrPosition),
      ...getStyleValue("borderRadius", typecontainerWidthfullPrBorderRadius),
      ...getStyleValue(
        "backgroundColor",
        typecontainerWidthfullPrBackgroundColor
      ),
      ...getStyleValue("width", typecontainerWidthfullPrWidth),
      ...getStyleValue("top", typecontainerWidthfullPrTop),
      ...getStyleValue("left", typecontainerWidthfullPrLeft),
      ...getStyleValue("elevation", typecontainerWidthfullPrElevation),
      ...getStyleValue("height", typecontainerWidthfullPrHeight),
    };
  }, [
    typecontainerWidthfullPrPosition,
    typecontainerWidthfullPrBorderRadius,
    typecontainerWidthfullPrBackgroundColor,
    typecontainerWidthfullPrWidth,
    typecontainerWidthfullPrTop,
    typecontainerWidthfullPrLeft,
    typecontainerWidthfullPrElevation,
    typecontainerWidthfullPrHeight,
  ]);

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", labelFontFamily),
      ...getStyleValue("textAlign", labelTextAlign),
      ...getStyleValue("flex", labelFlex),
    };
  }, [labelFontFamily, labelTextAlign, labelFlex]);

  return (
    <View
      style={[
        styles.typecontainerWidthfullPr,
        styles.containerFlexBox,
        typecontainerWidthfullPrStyle,
      ]}
    >
      <View style={[styles.container, styles.containerFlexBox]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: FontSize.semiboldBodyButton_size,
    letterSpacing: 0.3,
    lineHeight: 26,
    fontWeight: "600",
    fontFamily: FontFamily.semiboldBodyButton,
    color: Color.colorPaletteNeutral00,
    textAlign: "left",
  },
  container: {
    flex: 1,
    overflow: "hidden",
    paddingVertical: 0,
  },
  typecontainerWidthfullPr: {
    borderRadius: 12,
    backgroundColor: Color.colorPalettePrimary100,
    width: 327,
    paddingVertical: Padding.p_2xs,
  },
});

export default TypecontainerWidthfullPr;
