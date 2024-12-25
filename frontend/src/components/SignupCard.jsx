import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	Link,
	Container,
	useColorMode,
	useColorModeValue,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { useSetRecoilState } from "recoil";
  import authScreenAtom from "../atoms/authAtom";
  import useShowToast from "../hooks/useShowToast";
  import userAtom from "../atoms/userAtom";
  import { motion } from "framer-motion";
  
  const MotionBox = motion(Box);
  const MotionStack = motion(Stack);
  const MotionInput = motion(Input);
  
  export default function SignupCard() {
	const [showPassword, setShowPassword] = useState(false);
	const setAuthScreen = useSetRecoilState(authScreenAtom);
	const [inputs, setInputs] = useState({
	  name: "",
	  username: "",
	  email: "",
	  password: "",
	});
	const { toggleColorMode } = useColorMode();
  
	const showToast = useShowToast();
	const setUser = useSetRecoilState(userAtom);
  
	const handleSignup = async () => {
	  try {
		const res = await fetch("/api/users/signup", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
		  },
		  body: JSON.stringify(inputs),
		});
		const data = await res.json();
  
		if (data.error) {
		  showToast("Error", data.error, "error");
		  return;
		}
  
		localStorage.setItem("user-vibe", JSON.stringify(data));
		setUser(data);
	  } catch (error) {
		showToast("Error", error, "error");
	  }
	};
  
	const bgColor = useColorModeValue('white', 'gray.900');
	const cardBg = useColorModeValue('white', 'rgba(26, 32, 44, 0.8)');
	const textColor = useColorModeValue('gray.800', 'white');
	const placeholderColor = useColorModeValue('gray.400', 'gray.500');
	const inputBg = useColorModeValue('gray.100', 'rgba(45, 55, 72, 0.3)');
	const inputBorder = useColorModeValue('gray.300', 'rgba(255, 255, 255, 0.2)');
  
	return (
	  <Container maxW="100vw" h="100vh" p={0} bg={bgColor}>
		<Flex
		  align="center"
		  justify="center"
		  h="100%"
		>
		  <MotionStack
			spacing={8}
			mx="auto"
			maxW="lg"
			w="full"
			px={6}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		  >
			<Stack align="center" spacing={6}>
			  <MotionBox
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
			  >
				<Heading
				  fontSize="4xl"
				  bgGradient="linear(to-r, #4776E6, #8E54E9)"
				  bgClip="text"
				  textAlign="center"
				  letterSpacing="tight"
				>
				  Create Your Account
				</Heading>
			  </MotionBox>
			  <Text
				fontSize="lg"
				color={placeholderColor}
				textAlign="center"
				letterSpacing="wide"
			  >
				Join our community and start sharing your moments ✨
			  </Text>
			</Stack>
  
			<MotionBox
			  rounded="xl"
			  bg={cardBg}
			  backdropFilter="blur(10px)"
			  border={`1px solid ${inputBorder}`}
			  p={8}
			  initial={{ opacity: 0 }}
			  animate={{ opacity: 1 }}
			  whileHover={{ scale: 1.02 }}
			  transition={{
				opacity: { delay: 0.2, duration: 0.5 },
				scale: { duration: 0.2 }
			  }}
			>
			  <Stack spacing={6}>
				<HStack spacing={4}>
				  <Box w="full">
					<FormControl isRequired>
					  <FormLabel fontWeight="medium" color={textColor}>Full name</FormLabel>
					  <MotionInput
						type="text"
						onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
						value={inputs.name}
						placeholder="Your full name"
						size="lg"
						borderRadius="lg"
						bg={inputBg}
						border={`1px solid ${inputBorder}`}
						color={textColor}
						_placeholder={{ color: placeholderColor }}
						_hover={{
						  border: `1px solid ${textColor}`,
						}}
						_focus={{
						  border: "1px solid #8E54E9",
						  boxShadow: "0 0 0 1px #8E54E9",
						}}
						whileHover={{ scale: 1.01 }}
						transition={{ duration: 0.2 }}
					  />
					</FormControl>
				  </Box>
				  <Box w="full">
					<FormControl isRequired>
					  <FormLabel fontWeight="medium" color={textColor}>Username</FormLabel>
					  <MotionInput
						type="text"
						onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						value={inputs.username}
						placeholder="username"
						size="lg"
						borderRadius="lg"
						bg={inputBg}
						border={`1px solid ${inputBorder}`}
						color={textColor}
						_placeholder={{ color: placeholderColor }}
						_hover={{
						  border: `1px solid ${textColor}`,
						}}
						_focus={{
						  border: "1px solid #8E54E9",
						  boxShadow: "0 0 0 1px #8E54E9",
						}}
						whileHover={{ scale: 1.01 }}
						transition={{ duration: 0.2 }}
					  />
					</FormControl>
				  </Box>
				</HStack>
  
				<FormControl isRequired>
				  <FormLabel fontWeight="medium" color={textColor}>Email address</FormLabel>
				  <MotionInput
					type="email"
					onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
					value={inputs.email}
					placeholder="email@example.com"
					size="lg"
					borderRadius="lg"
					bg={inputBg}
					border={`1px solid ${inputBorder}`}
					color={textColor}
					_placeholder={{ color: placeholderColor }}
					_hover={{
					  border: `1px solid ${textColor}`,
					}}
					_focus={{
					  border: "1px solid #8E54E9",
					  boxShadow: "0 0 0 1px #8E54E9",
					}}
					whileHover={{ scale: 1.01 }}
					transition={{ duration: 0.2 }}
				  />
				</FormControl>
  
				<FormControl isRequired>
				  <FormLabel fontWeight="medium" color={textColor}>Password</FormLabel>
				  <InputGroup size="lg">
					<MotionInput
					  type={showPassword ? "text" : "password"}
					  onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
					  value={inputs.password}
					  placeholder="Enter your password"
					  borderRadius="lg"
					  bg={inputBg}
					  border={`1px solid ${inputBorder}`}
					  color={textColor}
					  _placeholder={{ color: placeholderColor }}
					  _hover={{
						border: `1px solid ${textColor}`,
					  }}
					  _focus={{
						border: "1px solid #8E54E9",
						boxShadow: "0 0 0 1px #8E54E9",
					  }}
					  whileHover={{ scale: 1.01 }}
					  transition={{ duration: 0.2 }}
					/>
					<InputRightElement>
					  <Button
						variant="ghost"
						onClick={() => setShowPassword(!showPassword)}
						_hover={{ bg: "transparent" }}
						color={textColor}
					  >
						{showPassword ? <ViewIcon /> : <ViewOffIcon />}
					  </Button>
					</InputRightElement>
				  </InputGroup>
				</FormControl>
  
				<Stack spacing={6}>
				  <MotionBox
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				  >
					<Button
					  w="full"
					  size="lg"
					  fontSize="md"
					  bgGradient="linear(to-r, #4776E6, #8E54E9)"
					  color="white"
					  _hover={{
						bgGradient: "linear(to-r, #4776E6, #8E54E9)",
						opacity: 0.9,
					  }}
					  _active={{
						bgGradient: "linear(to-r, #4776E6, #8E54E9)",
						opacity: 0.8,
					  }}
					  onClick={handleSignup}
					  fontWeight="bold"
					  borderRadius="lg"
					  py={6}
					  boxShadow="0 0 20px rgba(71, 118, 230, 0.3)"
					>
					  Create Account
					</Button>
				  </MotionBox>
  
				  <Text align="center" fontSize="md" color={textColor}>
					Already have an account?{" "}
					<Link
					  color="#8E54E9"
					  fontWeight="semibold"
					  onClick={() => setAuthScreen("login")}
					  _hover={{ textDecoration: "none", opacity: 0.8 }}
					>
					  Sign in
					</Link>
				  </Text>
				</Stack>
			  </Stack>
			</MotionBox>
		  </MotionStack>
		</Flex>
	  </Container>
	);
  }