import { Tabs } from "expo-router";
import { ImageBackground, Image, Text, View, StatusBar } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className='flex flex-row w-full flex-1 min-w-[100px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden '
      >
        <Image
          source={icon}
          tintColor='#151312'
          className="size-5"
        />
        <Text
          className='text-secondary text-base font-semibold ml-2'
        >
          {title}
        </Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image
        source={icon}
        tintColor='#A8B5DB'
        className='size-5'
      />
    </View>
  )
}



const _Layout = () => {
  return (
    // <>
    // <StatusBar 
    //         barStyle="light-content"
    //         backgroundColor="transparent"
    //         translucent={true}
    //       />
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        },
        tabBarStyle: {
          backgroundColor: '#0f0d23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 54,
          position: 'absolute',
          overflow: 'hidden'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title='Home'
            />
          )
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.search}
              title='Search'
            />
          )
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.save}
              title='Save'
            />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.person}
              title='Profile'
            />
          )
        }}
      />
    </Tabs>
    // </>
  )
}

export default _Layout