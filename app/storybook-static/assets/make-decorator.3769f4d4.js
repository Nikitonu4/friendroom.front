var d=function(t){var p=t.name,m=t.parameterName,u=t.wrapper,s=t.skipIfNoParametersOrOptions,f=s===void 0?!1:s,o=function(r){return function(a,e){var n=e.parameters&&e.parameters[m];return n&&n.disable||f&&!r&&!n?a(e):u(a,e,{options:r,parameters:n})}};return function(){for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return typeof r[0]=="function"?o().apply(void 0,r):function(){if(arguments.length>1)return r.length>1?o(r).apply(void 0,arguments):o.apply(void 0,r).apply(void 0,arguments);throw new Error("Passing stories directly into ".concat(p,`() is not allowed,
        instead use addDecorator(`).concat(p,") and pass options with the '").concat(m,"' parameter"))}}};export{d as m};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS1kZWNvcmF0b3IuMzc2OWY0ZDQuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9Ac3Rvcnlib29rL2FkZG9ucy9kaXN0L2VzbS9tYWtlLWRlY29yYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJjb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qc1wiO1xuaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qc1wiO1xuZXhwb3J0IHZhciBtYWtlRGVjb3JhdG9yID0gZnVuY3Rpb24gbWFrZURlY29yYXRvcihfcmVmKSB7XG4gIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgcGFyYW1ldGVyTmFtZSA9IF9yZWYucGFyYW1ldGVyTmFtZSxcbiAgICAgIHdyYXBwZXIgPSBfcmVmLndyYXBwZXIsXG4gICAgICBfcmVmJHNraXBJZk5vUGFyYW1ldGUgPSBfcmVmLnNraXBJZk5vUGFyYW1ldGVyc09yT3B0aW9ucyxcbiAgICAgIHNraXBJZk5vUGFyYW1ldGVyc09yT3B0aW9ucyA9IF9yZWYkc2tpcElmTm9QYXJhbWV0ZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHNraXBJZk5vUGFyYW1ldGU7XG5cbiAgdmFyIGRlY29yYXRvciA9IGZ1bmN0aW9uIGRlY29yYXRvcihvcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdG9yeUZuLCBjb250ZXh0KSB7XG4gICAgICB2YXIgcGFyYW1ldGVycyA9IGNvbnRleHQucGFyYW1ldGVycyAmJiBjb250ZXh0LnBhcmFtZXRlcnNbcGFyYW1ldGVyTmFtZV07XG5cbiAgICAgIGlmIChwYXJhbWV0ZXJzICYmIHBhcmFtZXRlcnMuZGlzYWJsZSkge1xuICAgICAgICByZXR1cm4gc3RvcnlGbihjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNraXBJZk5vUGFyYW1ldGVyc09yT3B0aW9ucyAmJiAhb3B0aW9ucyAmJiAhcGFyYW1ldGVycykge1xuICAgICAgICByZXR1cm4gc3RvcnlGbihjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdyYXBwZXIoc3RvcnlGbiwgY29udGV4dCwge1xuICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICBwYXJhbWV0ZXJzOiBwYXJhbWV0ZXJzXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIC8vIFVzZWQgd2l0aG91dCBvcHRpb25zIGFzIC5hZGREZWNvcmF0b3IoZGVjb3JhdG9yKVxuICAgIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGRlY29yYXRvcigpLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFVzZWQgYXMgWy5dYWRkRGVjb3JhdG9yKGRlY29yYXRvcihvcHRpb25zKSlcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBVc2VkIGFzIFsuXWFkZERlY29yYXRvcihkZWNvcmF0b3Iob3B0aW9uMSwgb3B0aW9uMikpXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yKGFyZ3MpLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWNvcmF0b3IuYXBwbHkodm9pZCAwLCBhcmdzKS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhc3Npbmcgc3RvcmllcyBkaXJlY3RseSBpbnRvIFwiLmNvbmNhdChuYW1lLCBcIigpIGlzIG5vdCBhbGxvd2VkLFxcbiAgICAgICAgaW5zdGVhZCB1c2UgYWRkRGVjb3JhdG9yKFwiKS5jb25jYXQobmFtZSwgXCIpIGFuZCBwYXNzIG9wdGlvbnMgd2l0aCB0aGUgJ1wiKS5jb25jYXQocGFyYW1ldGVyTmFtZSwgXCInIHBhcmFtZXRlclwiKSk7XG4gICAgfTtcbiAgfTtcbn07Il0sIm5hbWVzIjpbIm1ha2VEZWNvcmF0b3IiLCJfcmVmIiwibmFtZSIsInBhcmFtZXRlck5hbWUiLCJ3cmFwcGVyIiwiX3JlZiRza2lwSWZOb1BhcmFtZXRlIiwic2tpcElmTm9QYXJhbWV0ZXJzT3JPcHRpb25zIiwiZGVjb3JhdG9yIiwib3B0aW9ucyIsInN0b3J5Rm4iLCJjb250ZXh0IiwicGFyYW1ldGVycyIsIl9sZW4iLCJhcmdzIiwiX2tleSJdLCJtYXBwaW5ncyI6IkFBRVUsSUFBQ0EsRUFBZ0IsU0FBdUJDLEVBQU0sQ0FDdEQsSUFBSUMsRUFBT0QsRUFBSyxLQUNaRSxFQUFnQkYsRUFBSyxjQUNyQkcsRUFBVUgsRUFBSyxRQUNmSSxFQUF3QkosRUFBSyw0QkFDN0JLLEVBQThCRCxJQUEwQixPQUFTLEdBQVFBLEVBRXpFRSxFQUFZLFNBQW1CQyxFQUFTLENBQzFDLE9BQU8sU0FBVUMsRUFBU0MsRUFBUyxDQUNqQyxJQUFJQyxFQUFhRCxFQUFRLFlBQWNBLEVBQVEsV0FBV1AsR0FNMUQsT0FKSVEsR0FBY0EsRUFBVyxTQUl6QkwsR0FBK0IsQ0FBQ0UsR0FBVyxDQUFDRyxFQUN2Q0YsRUFBUUMsQ0FBTyxFQUdqQk4sRUFBUUssRUFBU0MsRUFBUyxDQUMvQixRQUFTRixFQUNULFdBQVlHLENBQ3BCLENBQU8sQ0FDUCxDQUNBLEVBRUUsT0FBTyxVQUFZLENBQ2pCLFFBQVNDLEVBQU8sVUFBVSxPQUFRQyxFQUFPLElBQUksTUFBTUQsQ0FBSSxFQUFHRSxFQUFPLEVBQUdBLEVBQU9GLEVBQU1FLElBQy9FRCxFQUFLQyxHQUFRLFVBQVVBLEdBSXpCLE9BQUksT0FBT0QsRUFBSyxJQUFPLFdBQ2ROLEVBQVMsRUFBRyxNQUFNLE9BQVFNLENBQUksRUFHaEMsVUFBWSxDQUVqQixHQUFJLFVBQVUsT0FBUyxFQUVyQixPQUFJQSxFQUFLLE9BQVMsRUFDVE4sRUFBVU0sQ0FBSSxFQUFFLE1BQU0sT0FBUSxTQUFTLEVBR3pDTixFQUFVLE1BQU0sT0FBUU0sQ0FBSSxFQUFFLE1BQU0sT0FBUSxTQUFTLEVBRzlELE1BQU0sSUFBSSxNQUFNLGlDQUFpQyxPQUFPWCxFQUFNO0FBQUEsa0NBQXVELEVBQUUsT0FBT0EsRUFBTSwrQkFBK0IsRUFBRSxPQUFPQyxFQUFlLGFBQWEsQ0FBQyxDQUMvTSxDQUNBLENBQ0EifQ==
