import { useEffect, useState } from "react";

export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// export const TextInput: React.FC<TextInputProps> = ({
//     onTextChange,
//     placeholder = 'start tyopimg',
//     initialValue = ''
// }) => {
//     const 
// }


function TextInput({
  onTextChange,
  placeholder = "",
  initialValue = "",
}: TextInputProps) {
  return (
    <div>
      <textarea
        cols={80}
        rows={20}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
        value={initialValue}
      />
    </div>
  );
}

export default TextInput;
