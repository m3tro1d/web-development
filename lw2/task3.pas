PROGRAM SayHello(INPUT, OUTPUT);
{SayHello: prints a greeting according to the 'name'
 parameter in the query string}
USES
  DOS;
VAR
  Name: STRING;
  Index: INTEGER;
BEGIN {SayHello}
  WRITELN('Content-Type: text/plain');
  WRITELN;

  {Find the name}
  Name := '';
  Index := POS('name=', GetEnv('QUERY_STRING'));
  IF Index = 1
  THEN
    BEGIN
      Name := COPY(GetEnv('QUERY_STRING'), 6, LENGTH(GetEnv('QUERY_STRING')));
      Index := POS('&', Name);
      IF Index <> 0
      THEN
        Name := COPY(Name, 1, Index - 1)
    END;

  IF Name <> ''
  THEN
    WRITELN('Hello, dear ', Name, '!')
  ELSE
    WRITELN('Hello, Anonymous!')
END. {SayHello}
