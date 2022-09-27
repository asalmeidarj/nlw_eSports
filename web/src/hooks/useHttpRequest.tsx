const heardsConfig = {'Content-Type': 'application/json'};

export const useHttpRequest = {

  get: async (url: string): Promise<Object> => {
    const res = await fetch(url)
    const json = res.json();
    return json
  },

  post: async (data: Object, url: string): Promise<Object> => {
    const res = await fetch(
      url,
      {
        method: "POST",
        headers: {
          ...heardsConfig
        },
        body: JSON.stringify(data)
      }
    );

    const json = res.json();
    return json;
  }

}