import {StyleSheet} from "react-native";

export default StyleSheet.create({
  toucable:{height:70,width:500,margin:3,
  alignItems:"stretch",
  },
  container: {
    flex: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"space-between"
  },

  image: { width: 50, height: 50 },
  text: { fontSize: 16, fontWeight: 'bold' ,marginHorizontal:15}

});