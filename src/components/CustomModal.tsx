import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  ButtonGroup,
  Stack,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  children: React.ReactNode;
  icon: IconType;
  iconLabel: string;
  primaryText?: string;
  secondaryText?: string;
  address?: string;
  addressNumber?: string;
  iconClassName?: string;
  isOpen: boolean;
  onClose(): void;
  motionPreset?: "slideInBottom" | "slideInRight" | "scale" | "none";
  leastDestructiveRef: any;
  isCentered: boolean;
  placeholder?: string;
  hasInputField?: boolean;
  hasTextField?: boolean;
  addressText?: string;
}

export default function CustomModal({
  children,
  icon: Icon,
  iconLabel,
  primaryText,
  secondaryText,
  address,
  addressNumber,
  iconClassName,
  isOpen,
  onClose,
  motionPreset,
  leastDestructiveRef,
  isCentered,
  placeholder,
  hasInputField,
  hasTextField,
  addressText
}: Props) {
  return (
    <>
      <AlertDialog
        size="sm"
        motionPreset={motionPreset}
        leastDestructiveRef={leastDestructiveRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered={isCentered}
      >
        <AlertDialogOverlay />

        <AlertDialogContent className="mx-auto">
          <AlertDialogHeader>
            <Stack className="text-center">
              <Flex className="items-center mx-auto gap-2 text-[1rem]">
                <Icon className={iconClassName} aria-label={iconLabel} />
                <span>{iconLabel}</span>
              </Flex>
            <Text as='p' className="text-sm font-normal text-slate-500">{secondaryText}</Text>
              <Text className="text-sm">
                <span className=" text-gray-500">{address}: 
                </span>
                <strong>{addressNumber}</strong>
              </Text>
            </Stack>
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
           { hasInputField &&  <form>
              <FormControl>
                <FormLabel htmlFor="address">{primaryText}</FormLabel>
                <Input
                  size="lg"
                  className="border border-black placeholder-gray-400 overflow-x-clip "
                  variant="outline"
                  id="address"
                  name="address"
                  type="text"
                  placeholder={placeholder}
                />
              </FormControl>
            </form>}
            {hasTextField && 
            <Stack>
              <Text className='text-sm font-medium'>
                {primaryText}:
              </Text>
              <span className=" text-gray-500 text-sm">{addressText}</span>
              </Stack>}
          </AlertDialogBody>
          <AlertDialogFooter
          className="mx-auto">
            <ButtonGroup flexDir='column' gap={2}>{children}</ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
