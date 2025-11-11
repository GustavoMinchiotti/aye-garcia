"use client";

import * as React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./select-styles.css";

interface Option {
  value: string;
  label: string;
}

interface SelectCustomProps {
  options: Option[];
  placeholder?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export default function SelectCustom({
  options,
  placeholder = "Selecciona una opción",
  defaultValue,
  onValueChange,
}: SelectCustomProps) {
  return (
    <Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
      <Select.Trigger className="SelectTrigger" aria-label="Select">
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="SelectContent" position="popper">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport className="SelectViewport">
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="SelectItem"
              >
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>

          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
