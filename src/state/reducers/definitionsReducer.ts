interface DefinitionsState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const defaultState = {
  loading: false,
  error: null,
  data: [],
};

const definitionsReducer = (
  state: DefinitionsState = defaultState,
  action: any
) => {
  switch (action.type) {
    case 'search_definitions':
      return {
        loading: true,
        error: null,
        data: [],
      };

    case 'search_definitions_success':
      return {
        lading: false,
        error: null,
        data: action.payload,
      };

    case 'search_definitions_errors':
      return {
        loading: false,
        error: action.payload,
        data: [],
      };

    default:
      return state;
  }
};

export default definitionsReducer;
