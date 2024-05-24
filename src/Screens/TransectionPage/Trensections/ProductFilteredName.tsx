import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import {List } from "react-native-paper";
import ProductCard from "../../../Components/ProductCard/productcard.tsx";
import LoadingAnimation from "../../../Components/Loading/Loading.tsx";
import { getNumColumns } from '../../../../assets/js/deviceutils';
import { fetchMockBackendData } from "../../../../services/fetchingData/fetchData";
const ProductFilteredName = () => {


  useEffect(() => {
    fetchDataFromMockBackend(); // Call the function on component mount
  }, []);

  const ProductCardMemoized = React.memo(ProductCard);
  const numColumns = getNumColumns();
  const [loading, setLoading] = useState(true);
  const [data2, setData] = useState<any[]>([]);
  const [nameTerm, setnameTerm] = useState(99);
  let data;


  const filteredAsNM = data2.filter((item) => {
      const itemName = item.title.toLowerCase();
      const firstLetter = itemName[0];


      switch (nameTerm) {
        case 0:
          return firstLetter >= "a" && firstLetter <= "e";
        case 1:
          return firstLetter >= "f" && firstLetter <= "j";
        case 2:
          return firstLetter >= "k" && firstLetter <= "o";
        case 3:
          return firstLetter >= "p" && firstLetter <= "q";
        case 4:
          return firstLetter >= "r" && firstLetter <= "v";
        case 5:
          return firstLetter >= "w" && firstLetter <= "z";
        case 99:
          return firstLetter >= "a" && firstLetter <= "z";
        default:
          return false;
      }
    }
  );

  const fetchDataFromMockBackend = async () => {
    try {
      data = await fetchMockBackendData();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  if (loading) {
    return <LoadingAnimation />;
  }
  return (
    <View>
      <List.Section>
        <List.Accordion
          title="Choose First Letter Range "
          left={props => <List.Icon {...props} icon="folder" />}>
          <List.Item title="A-E" onPress={() => {
            setnameTerm(0);
          }} />
          <List.Item title="F-J" onPress={() => {
            setnameTerm(1);
          }} />
          <List.Item title="K-O" onPress={() => {
            setnameTerm(2);
          }} />
          <List.Item title="P-Q" onPress={() => {
            setnameTerm(3);
          }} />
          <List.Item title="R-V" onPress={() => {
            setnameTerm(4);
          }} />
          <List.Item title="W-Z" onPress={() => {
            setnameTerm(5);
          }} />
        </List.Accordion>
      </List.Section>
      <Text>
        {filteredAsNM.length} items found
      </Text>
      <FlatList
        data={filteredAsNM}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <ProductCardMemoized product={item} />
          </View>
        )}
        numColumns={numColumns}
        keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};


export default ProductFilteredName;
