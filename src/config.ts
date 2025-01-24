import { Config } from "./domain/config";

const config: Config = {
  forms: {
    enquire: {
      steps: [
        {
          id: "STEP_1",
          fields: [
            {
              name: "NAME",
              label: "name",
              errors: {},
              validation: { required: true },
            },
            {
              name: "EMAIL",
              label: "email",
              errors: {},
              validation: { required: true },
            },
          ],
        },
        {
          id: "STEP_2",
          fields: [
            {
              name: "COUNTRY",
              label: "country",
              errors: {},
              type: "select",
              validation: { required: true },
            },
            // { name: "DETAILS", label: "details", errors: {} },
          ],
        },
        {
          id: "STEP_3",
          fields: [
            {
              name: "DETAILS",
              label: "details",
              errors: {},
              type: "textarea",
              validation: { required: true },
            },
            // { name: "DETAILS", label: "details", errors: {} },
          ],
        },
      ],
      defaultValues: { COUNTRY: "united kingdom" },
    },
  },
};

export default config;
