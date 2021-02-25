PROGRAM WorkWithQueryString(INPUT, OUTPUT);
{WorkWithQueryString: test the GetQueryStringParameter function}
USES
  DOS;
FUNCTION GetQueryStringParameter(CONST Key: STRING): STRING;
{GetQueryStringParameter: returns the Key parameter value from the
 QUERY_STRING if presented; otherwise, '' is returned}
VAR
  StartIndex, EndIndex: INTEGER;
  Q, Value: STRING;
BEGIN {GetQueryStringParameter}
  Q := GetEnv('QUERY_STRING');
  GetQueryStringParameter := '';
  StartIndex := POS(Key + '=', Q);
  {Ensure that the parameter is 'standalone'}
  IF (StartIndex <> 0) AND ((Q[StartIndex-1] = '&') OR (StartIndex = 1))
  THEN
    BEGIN
      {Strip everything before the value}
      StartIndex := StartIndex + LENGTH(Key) + 1;
      Value := COPY(Q, StartIndex, LENGTH(Q));
      {Strip everything after the value if presented}
      EndIndex := POS('&', Value);
      IF EndIndex <> 0
      THEN
        {- 1 to omit '&'}
        Value := COPY(Value, 1, EndIndex - 1);
      GetQueryStringParameter := Value
    END
END; {GetQueryStringParameter}
BEGIN {WorkWithQueryString}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END. {WorkWithQueryString}
