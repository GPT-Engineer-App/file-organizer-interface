import { Box, Button, FormControl, FormLabel, Input, Textarea, Select, Heading, VStack, HStack, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleAddFileType = () => {
    // Logic to add another file type input
  };
  const handleRemoveFileType = () => {
    // Logic to remove a file type input
  };

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Heading>File Organizer</Heading>
        <FormControl>
          <FormLabel>Directory</FormLabel>
          <Input placeholder="Enter directory path" />
        </FormControl>
        <FormControl>
          <FormLabel>Purpose</FormLabel>
          <Textarea placeholder="Describe the primary focus or theme of your content" />
        </FormControl>
        <FormControl>
          <FormLabel>File Types</FormLabel>
          <HStack>
            <Input placeholder="Enter file type" />
            <IconButton icon={<FaPlus />} onClick={handleAddFileType} />
          </HStack>
        </FormControl>
        <FormControl>
          <FormLabel>Organization Scheme</FormLabel>
          <Select placeholder="Select organization scheme">
            <option value="alphabetical">Alphabetical</option>
            <option value="chronological">Chronological</option>
            <option value="geographical">Geographical</option>
            <option value="topic">Topic/Subject</option>
            <option value="task">Task</option>
            <option value="audience">Audience</option>
            <option value="metaphor">Metaphor</option>
            <option value="hybrid">Hybrid</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Hierarchy Type</FormLabel>
          <Select placeholder="Select hierarchy type">
            <option value="flat">Flat</option>
            <option value="deep">Deep</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Organization Structure</FormLabel>
          <Select placeholder="Select organization structure">
            <option value="hierarchical">Hierarchical</option>
            <option value="relational">Relational</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Workflow/Process</FormLabel>
          <Textarea placeholder="Describe the workflow or process to optimize for" />
        </FormControl>
        <FormControl>
          <FormLabel>Platform/App</FormLabel>
          <Input placeholder="Enter platform or app to optimize for" />
        </FormControl>
        <Button colorScheme="blue" onClick={onOpen}>
          Review Settings
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Review Your Organization Settings</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{/* Display the settings summary here */}</ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Save Settings</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};

export default Index;
