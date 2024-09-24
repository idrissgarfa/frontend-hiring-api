const Errors = {
  ELYSIA: {
    NOT_FOUND: {
      code: 1000,
      message: "Route not found",
    },
    INTERNAL_SERVER: {
      code: 1002,
      message: "Internal Server error",
    },
    VALIDATION: {
      code: 1003,
      message: "Validation error",
    },
  },
  DATABASE: {
    CONNECTION_ERROR: {
      code: 3000,
      message: "Database connection error",
    },
    QUERY_FAILED: {
      code: 3001,
      message: (hint: string) => `Query failed : \n ${hint}`,
    },
  },
  AUTH: {
    UNAUTHORIZED: {
      code: 2000,
      message: "Not authorized",
    },
    BAD_CREDENTIALS: {
      code: 2001,
      message: "Bad Credentials",
    },
    ACCOUNT_FROZEN: {
      code: 2002,
      message: "Your account is froze please contact your supervisor",
    },
  },
  ISSUE: {
    NOT_FOUND: {
      code: 1000,
      message: "Issue not found",
    },
    MISSING_ID: {
      code: 1001,
      message: "No provided issue ID",
    },
    EXISTS: {
      code: 1002,
      message: "Issue already exists",
    },
  },
};

export default Errors;
