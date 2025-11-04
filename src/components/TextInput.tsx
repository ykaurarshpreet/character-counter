import { useState } from "react";
import React from 'react';
// import { useEffect, useState } from "react";

export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// js               react begins here                                 typescript
function TextInput({onTextChange, placeholder = "", initialValue = ""}: TextInputProps) {
  return (
       <div className="w-full">
      <textarea
       className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
