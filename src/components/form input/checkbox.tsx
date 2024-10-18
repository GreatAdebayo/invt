import { View, Text } from "react-native";
import React, { useState } from "react";
import { Show, ShowElse, ShowWhen } from "../elements/show";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../utils/constants";
import { TouchableOpacity } from "react-native";

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity
        onPress={() => setChecked(!checked)}
    >
      <Show>
        <ShowWhen isTrue={checked}>
          <MaterialCommunityIcons
            name="checkbox-marked"
            color={colors["theme-blue"]}
            size={20}
          />
        </ShowWhen>

        <ShowElse>
          <MaterialCommunityIcons
            name="checkbox-blank-outline"
            color={colors["theme-b-gray"]}
            size={20}
          />
        </ShowElse>
      </Show>
    </TouchableOpacity>
  );
};

export default Checkbox;
