import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab.tsx';
import WelcomeScreen from "../Screens/WelcomeScreen/WelcomeScreen.tsx";
import LoginPage from "../Screens/LoginPage/LoginPage.tsx";
import XReports from "../Screens/ReportsScreen/Reports/UserList.tsx";
import ZReports from "../Screens/ReportsScreen/Reports/Z-Report.tsx";
import CampaignsScreen from "../Screens/ReportsScreen/Reports/Campaigns.tsx";
import OtherReportScreen from "../Screens/ReportsScreen/Reports/Others.tsx";
import AddProductScreen from "../Screens/TransectionPage/Trensections/AddProduct.tsx";
import OtherTransectionScreen from "../Screens/TransectionPage/Trensections/Others.tsx";
import ProductsScreen from "../Screens/TransectionPage/Trensections/Products/Products.tsx";
import SalesScreen from "../Screens/TransectionPage/Trensections/Sales/Sales.tsx";
import ProductFiltered from "../Screens/TransectionPage/Trensections/Products/FilterPages/ProductFiltered.tsx";
import ProductFilteredPrice from "../Screens/TransectionPage/Trensections/Products/FilterPages/ProductFilteredPrice.tsx";
import ProductFilteredName from "../Screens/TransectionPage/Trensections/Products/FilterPages/ProductFilteredName.tsx";
import NFCPage from "../Screens/LoginPage/nfc.tsx";
import AllProducts from "../Screens/TransectionPage/Trensections/Products/FilterPages/allprodcuts.tsx";



const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="app" component={BottomTab} />
      <Stack.Screen name="X-Report" component={XReports} options={{headerShown:true}}/>
      <Stack.Screen name="Z-Report" component={ZReports} options={{headerShown:true}}/>
      <Stack.Screen name="Campaings" component={CampaignsScreen} options={{headerShown:true}}/>
      <Stack.Screen name="Other" component={OtherReportScreen} options={{headerShown:true}}/>
      <Stack.Screen name="AddProduct" component={AddProductScreen} options={{headerShown:true}}/>
      <Stack.Screen name="OtherTrans" component={OtherTransectionScreen} options={{headerShown:true}}/>
      <Stack.Screen name="Products" component={ProductsScreen} options={{headerShown:true}}/>
      <Stack.Screen name="Sales" component={SalesScreen} options={{headerShown:true}}/>
      <Stack.Screen name="ProductFiltered" component={ProductFiltered} options={{headerShown:true}}/>
      <Stack.Screen name="ProductFilteredPrice" component={ProductFilteredPrice} options={{headerShown:true}}/>
      <Stack.Screen name="ProductFilteredName" component={ProductFilteredName} options={{headerShown:true}}/>
      <Stack.Screen name="NFCPage" component={NFCPage} />
      <Stack.Screen name="AllProducts" component={AllProducts} options={{headerShown:true}}/>
    </Stack.Navigator>
  );
}


