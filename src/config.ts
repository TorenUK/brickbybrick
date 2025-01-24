import { Config } from "./domain/config";

const config: Config = {
  forms: {
    enquire: {
      steps: [
        {
          id: "STEP_1",
          fields: [
            { name: "FIRSTNAME", label: "first name", errors: {} },
            { name: "LASTNAME", label: "last name", errors: {} },
          ],
        },
        {
          id: "STEP_2",
          fields: [
            { name: "COUNTRY", label: "country", errors: {} },
            // { name: "DETAILS", label: "details", errors: {} },
          ],
        },
      ],
      defaultValues: { COUNTRY: "united kingdom" },
    },
  },
};

export default config;
