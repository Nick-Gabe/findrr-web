import { Icon, useColorModeValue } from "@chakra-ui/react";

const Waves = (props: any) => {
  return (
    <Icon
      width="1440"
      height="389"
      viewBox="0 0 1440 389"
      color={useColorModeValue("primary.100", "black")}
      {...props}
    >
      <path
        opacity="0.2"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 87L34 79C69 72 137 58 206 58C274 58 343 72 411 115C480 159 549 231 617 238C686 245 754 187 823 180C891 173 960 216 1029 238C1097 259 1166 259 1234 216C1303 173 1371 87 1406 43L1440 0V389H1406C1371 389 1303 389 1234 389C1166 389 1097 389 1029 389C960 389 891 389 823 389C754 389 686 389 617 389C549 389 480 389 411 389C343 389 274 389 206 389C137 389 69 389 34 389H0V87Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default Waves;
