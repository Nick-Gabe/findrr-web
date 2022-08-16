import { Button, Icon, useColorModeValue } from "@chakra-ui/react";

const SearchIcon = (props: any) => {
  return (
    <Button
      display={"flex"}
      backgroundColor={useColorModeValue("primary.100", "black.200")}
      borderRadius={"5px"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background-color .2s ease"}
      _hover={{
        cursor: "pointer",
        backgroundColor: useColorModeValue("black.200", "primary.100"),
      }}
      _focus={{
        cursor: "pointer",
        backgroundColor: useColorModeValue("black.200", "primary.100"),
      }}
      zIndex={2}
      {...props}
    >
      <Icon color={"white.100"} viewBox={`0 0 48 50`}>
        <svg width={"60"} height={"62"} viewBox={"0 0 60 62"}>
          <path
            d="M27.1458 5.94904C18.9358 5.94904 12.2848 12.8409 12.2848 21.3403C12.2806 24.1403 13.0175 26.8879 14.4155 29.2845L7.21044 36.7469L7.23552 36.7728C6.46649 37.5352 5.9942 38.6174 5.9942 39.8405C5.99374 42.2035 7.81136 44.0514 10.0906 44.051C11.2548 44.0505 12.296 43.5681 13.039 42.7831L13.0571 42.8019L20.4911 35.1019C22.556 36.1758 24.8351 36.7339 27.1458 36.7315C35.3562 36.7315 42.0058 29.8405 42.0058 21.3403C42.0058 12.8409 35.3557 5.94904 27.1458 5.94904ZM27.2359 30.6794C22.1044 30.6794 17.9476 26.3727 17.9476 21.0598C17.9476 15.748 22.1044 11.4403 27.2359 11.4403C32.3674 11.4403 36.5232 15.7475 36.5232 21.0598C36.5237 26.3727 32.3674 30.6794 27.2359 30.6794Z"
            fill="currentColor"
          />
        </svg>
      </Icon>
    </Button>
  );
};

export default SearchIcon;
