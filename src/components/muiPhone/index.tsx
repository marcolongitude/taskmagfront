import "react-international-phone/style.css";

import {
    InputAdornment,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import {
    defaultCountries,
    FlagImage,
    parseCountry,
    usePhoneInput,
} from "react-international-phone";
import { isPhoneValid } from "../../utils/phones";
import { TypographyST } from "@solterra/components";
import { useCallback, useEffect } from "react";

type Props = {
    value: string;
    onChange: (value: string) => string | void;
};

export const MuiPhone = ({ value, onChange, ...restProps }: Props) => {
    const {
        inputValue,
        handlePhoneValueChange,
        inputRef,
        country,
        setCountry,
    } = usePhoneInput({
        defaultCountry: "br",
        value,
        countries: defaultCountries,
        onChange: (data) => {
            onChange(data.phone);
        },
    });

    const validarPhone = useCallback(() => {
        const isValid = isPhoneValid(inputValue);
        return isValid;
    }, [inputValue]);

    useEffect(() => {
        validarPhone();
    }, [validarPhone, value]);

    return (
        <>
            <TextField
                variant="outlined"
                label="Telefone"
                color="primary"
                placeholder="Telefone"
                value={inputValue}
                onChange={handlePhoneValueChange}
                type="tel"
                inputRef={inputRef}
                size="small"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment
                            position="start"
                            style={{ marginRight: "2px", marginLeft: "-8px" }}
                        >
                            <Select
                                size="small"
                                MenuProps={{
                                    style: {
                                        top: "10px",
                                        left: "-34px",
                                    },
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "left",
                                    },
                                }}
                                sx={{
                                    width: "max-content",
                                    // Remove default outline (display only on focus)
                                    fieldset: {
                                        display: "none",
                                    },
                                    '&.Mui-focused:has(div[aria-expanded="false"])':
                                        {
                                            fieldset: {
                                                display: "block",
                                            },
                                        },
                                    // Update default spacing
                                    ".MuiSelect-select": {
                                        padding: "8px",
                                        paddingRight: "24px !important",
                                    },
                                    svg: {
                                        right: 0,
                                    },
                                }}
                                value={country.iso2}
                                onChange={(e) => setCountry(e.target.value)}
                                renderValue={(value) => (
                                    <FlagImage
                                        iso2={value}
                                        style={{ display: "flex" }}
                                    />
                                )}
                            >
                                {defaultCountries.map((c) => {
                                    const country = parseCountry(c);
                                    return (
                                        <MenuItem
                                            key={country.iso2}
                                            value={country.iso2}
                                        >
                                            <FlagImage
                                                iso2={country.iso2}
                                                style={{ marginRight: "8px" }}
                                            />
                                            <Typography marginRight="8px">
                                                {country.name}
                                            </Typography>
                                            <Typography color="gray">
                                                +{country.dialCode}
                                            </Typography>
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </InputAdornment>
                    ),
                }}
                {...restProps}
            />
            {!validarPhone() && (
                <TypographyST component="p" color="error" variant="body2">
                    Telefone inválido
                </TypographyST>
            )}
        </>
    );
};
